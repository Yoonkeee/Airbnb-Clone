from rest_framework.authentication import BaseAuthentication
from users.models import User
from rest_framework import exceptions
from django.conf import settings
import jwt


class TestAuth(BaseAuthentication):
    def authenticate(self, request):
        username = request.headers.get("Test")
        if not username:
            return None
        try:
            user = User.objects.get(username=username)
            return (user, None)
        except user.DoesNotExist:
            raise exceptions.AuthenticationFailed(f"이런사람 없음 {username}")


class JWTAuth(BaseAuthentication):
    def authenticate(self, request):
        token = request.headers.get("jwt")
        if not token:
            return None
        decoded = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
        pk = decoded.get("pk")
        if not pk:
            return exceptions.AuthenticationFailed("Invalid Token")
        try:
            user = User.objects.get(pk=pk)
            return (user, None)
        except User.DoesNotExist:
            raise exceptions.AuthenticationFailed("이런사람 없음")
