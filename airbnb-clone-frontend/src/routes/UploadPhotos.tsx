import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useHostOnlyPage from "../components/HostOnlyPage";
import useProtectedPage from "../components/ProtectedPage";
import { useMutation } from "@tanstack/react-query";
import { getUploadURL, uploadImage } from "../api";
import { watch } from "fs";

interface IForm {
  file: FileList;
}
interface IUploadURLResponse {
  id: string;
  uploadURL: string;
}

export default function UploadPhotos() {
  const { register, handleSubmit, watch } = useForm<IForm>();
  const { roomPk } = useParams();
  const uploadImageMutation = useMutation(uploadImage, {
    onSuccess: (data: any) => {
      console.log(data);
    },
  });
  const uploadURLMutation = useMutation(getUploadURL, {
    onSuccess: (data: IUploadURLResponse) => {
      uploadImageMutation.mutate({
        file: watch("file"),
        uploadURL: data.uploadURL,
      });
    },
  });
  const onSubmit = (data: any) => {
    uploadURLMutation.mutate();
  };
  useHostOnlyPage();
  useProtectedPage();
  return (
    <Box
      pb={40}
      mt={10}
      px={{
        base: 10,
        lg: 40,
      }}
    >
      <Container>
        <Heading textAlign={"center"}>Upload a Photo</Heading>
        <VStack
          spacing={5}
          mt={10}
          as={"form"}
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl>
            <Input {...register("file")} type="file" accept="image/*" />
          </FormControl>
          <Button type={"submit"} w="full" colorScheme={"red"}>
            Upload photos
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
