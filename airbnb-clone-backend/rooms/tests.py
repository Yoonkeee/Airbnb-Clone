from rest_framework.test import APITestCase
from . import models
from users.models import User


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


class TestAmenity(APITestCase):

    NAME = "Test Amenity"
    DESC = "Test Description"

    def setUp(self):
        models.Amenity.objects.create(
            name=self.NAME,
            description=self.DESC,
        )

    def test_amenity_not_found(self):
        response = self.client.get("/api/rooms/amenities/2")
        self.assertEqual(response.status_code, 404)

    def test_get_amenity(self):

        response = self.client.get("/api/rooms/amenities/1")
        self.assertEqual(response.status_code, 200)

        data = response.json()

        self.assertEqual(data["description"], self.DESC)

    def test_put_amenity(self):
        pass
        # new_amenity_name = "New Amenity"
        # new_amenity_description = "New Desc"
        # response = self.client.post(
        #     self.URL,
        #     data={
        #         "name": new_amenity_name,
        #         "description": new_amenity_description,
        #     },
        # )
        # data = response.json()
        # self.assertEqual(response.status_code, 200, "error!!")
        # self.assertEqual(data["name"], new_amenity_name)
        # self.assertEqual(data["description"], new_amenity_description)

        # response = self.client.post(self.URL)
        # data = response.json()
        # self.assertEqual(response.status_code, 200)
        # self.assertIn("name", data)

    def test_delete_amenity(self):
        response = self.client.delete("/api/rooms/amenities/1")
        self.assertEqual(response.status_code, 204)


class TestRooms(APITestCase):
    def setUp(self):
        user = User.objects.create(username="testcase")
        user.set_password("1")
        user.save()
        self.user = user

    def test_create_room(self):
        response = self.client.post("/api/rooms/")
        self.assertEqual(response.status_code, 403)

        self.client.force_login(self.user)

        response = self.client.post("/api/rooms/")
        print(response.json())
