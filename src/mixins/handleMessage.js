import Swal from "sweetalert2";

export const handleErrorMassage = errorMessage => {
    Swal.fire({
        icon: 'error',
        text: errorMessage,
        showDenyButton: true,
        showConfirmButton: false,
        denyButtonText: "Close"
    });
}