import { instance } from "@/apis/instance"

export const getImage = async(imageFile: File) => {
    const data = await instance.post("/image", imageFile)
}