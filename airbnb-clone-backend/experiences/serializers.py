from rest_framework.serializers import ModelSerializer
from .models import Perk, Experience
from users.serializers import TinyUserSerializer
from categories.serializers import CategorySerializers
from rest_framework import serializers
from reviews.serializers import ReviewSerializer
from medias.serializers import PhotoSerializer
from wishlists.models import Wishlist


class PerkSerializer(ModelSerializer):
    class Meta:
        model = Perk
        fields = ("name", "description")


class ExperienceListSerializer(ModelSerializer):
    rating = serializers.SerializerMethodField()
    is_owner = serializers.SerializerMethodField()
    photos = PhotoSerializer(many=True, read_only=True)

    class Meta:
        model = Experience
        fields = (
            "pk",
            "name",
            "country",
            "city",
            "price",
            "rating",
            "is_owner",
            "photos",
        )

    def get_rating(self, experience):
        return experience.rating()

    def get_is_owner(self, experience):
        request = self.context["request"]
        return experience.owner == request.user


class ExperienceDetailSerializer(ModelSerializer):
    owner = TinyUserSerializer(read_only=True)
    amenities = PerkSerializer(read_only=True, many=True)
    category = CategorySerializers(read_only=True)
    rating = serializers.SerializerMethodField()
    is_owner = serializers.SerializerMethodField()
    is_liked = serializers.SerializerMethodField()
    reviews = ReviewSerializer(many=True, read_only=True)
    photos = PhotoSerializer(many=True, read_only=True)

    class Meta:
        model = Experience
        fields = "__all__"

    def get_rating(self, experience):
        return experience.rating()

    def create(self, validated_data):
        return Experience.objects.create(**validated_data)

    def get_is_owner(self, experience):
        request = self.context["request"]
        return experience.owner == request.user

    def get_is_liked(self, experience):
        request = self.context["request"]
        return Wishlist.objects.filter(
            user=request.user, experiences__pk=experience.pk
        ).exists()
