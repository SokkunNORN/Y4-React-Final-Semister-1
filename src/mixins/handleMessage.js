import Swal from "sweetalert2";

export const handleErrorMassage = errorMessage => {
    Swal.fire({
        title: "Error!",
        text: errorMessage,
        showDenyButton: true,
        showConfirmButton: false,
        denyButtonText: "Close"
    });
}