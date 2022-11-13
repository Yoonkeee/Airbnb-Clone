from rest_framework.test import APITestCase
from . import models


class TestAmenities(APITestCase):

    NAME = "Amenity Test"
    DSECRIPTION = "Amenity Description"
    URL = "/api/rooms/amenities/"

    def setUp(self):
        models.Amenity.objects.create(
            name=self.NAME,
            description=self.DSECRIPTION,
        )

    def test_all_amenities(self):

        response = self.client.get(self.URL)
        data = response.json()
        self.assertEqual(response.status_code, 200, "erorror")

        self.assertIsInstance(data, list)
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]["name"], self.NAME)
        self.assertEqual(data[0]["description"], self.DSECRIPTION)

    def test_create_amenity(self):
        new_amenity_name = "New Amenity"
        new_amenity_description = "New Desc"
        response = self.client.post(
            self.URL,
            data={
                "name": new_amenity_name,
                "description": new_amenity_description,
            },
        )
        data = response.json()
        self.assertEqual(response.status_code, 200, "error!!")
        self.assertEqual(data["name"], new_amenity_name)
        self.assertEqual(data["description"], new_amenity_description)

        response = self.client.post(self.URL)
        data = response.json()
        self.assertEqual(response.status_code, 200)
        self.assertIn("name", data)
