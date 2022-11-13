from rest_framework.test import APITestCase
from . import models


class TestAmenities(APITestCase):

    NAME = "Amenity Test"
    DSECRIPTION = "Amenity Description"

    def setUp(self):
        models.Amenity.objects.create(
            name=self.NAME,
            description=self.DSECRIPTION,
        )

    def test_all_amenities(self):

        response = self.client.get("/api/rooms/amenities/")
        data = response.json()
        self.assertEqual(response.status_code, 200, "erorror")

        self.assertIsInstance(data, list)
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]["name"], self.NAME)
        self.assertEqual(data[0]["description"], self.DSECRIPTION)
