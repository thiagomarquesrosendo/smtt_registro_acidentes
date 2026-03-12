import { ChangeEvent, useState } from "react";

export function EnviarFotos() {
  const [images, setImages] = useState<File[]>([]);

  function handleImages(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    setImages([...images, ...Array.from(e.target.files)]);
  }

  function removeImage(index: number) {
    setImages(images.filter((_, i) => i !== index));
  }

  const imageNames = images.map(img => img.name).join(", ");

  return { images, imageNames, handleImages, removeImage };
}