import { Edit } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { useGeneralStore } from "@/store/useGeneral";


const EditProfilePic = () => {

  const { changeProfilePic } = useAuthStore();
  const {setPreviewProfilePic} = useGeneralStore();

  const onChangeImage = (data: React.ChangeEvent<HTMLInputElement>) => {
    if(data.target.files){
      const file = data.target.files[0];
      const reader = new FileReader();
      
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const base64Image = reader.result;
        
        const data = {
          profilePic : base64Image
        }
        setPreviewProfilePic(base64Image as string);
        changeProfilePic(data);
      }
    }
  }

  return (
    <form className="absolute p-2 rounded-full cursor-pointer bg-muted transition hover:bg-chart-3 right-[-.4rem] bottom-0">
      <input type="file" accept="image/*" className="hidden" id="file-upload"  onChange={onChangeImage} />
      <label htmlFor="file-upload">
        <Edit className="w-5 h-5   " strokeWidth={1} />
      </label>
  
    </form>
  );
};

export default EditProfilePic;
