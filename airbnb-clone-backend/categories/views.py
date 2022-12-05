from django.http import JsonResponse
from .models import Category
from django.core import serializers
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework.viewsets import ModelViewSet
from rest_framework.status import HTTP_204_NO_CONTENT
from .serializers import CategorySerializers


class CategoryViewSet(ModelViewSet):
    # needs 2 properties
    # 1. serializer,
    # 2. object of view set

    serializer_class = CategorySerializers
    queryset = Category.objects.filter(kind=Category.CategoryKindChoices.ROOMS)
