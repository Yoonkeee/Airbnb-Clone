from rest_framework.authentication import BaseAuthentication
from users.models import User
from rest_framework import exceptions


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
