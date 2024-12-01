import Swal from "sweetalert2";

export const successAlert =(text)=>{
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Sign ${text} success!`,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
}
export const deleteAlert =(text)=>{
    Swal.fire({
        icon: "success",
        title: text,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
}