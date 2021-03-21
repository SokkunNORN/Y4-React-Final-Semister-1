import Swal from "sweetalert2"

const body = values => {
    let html = '<br />'

    values.map((value, index) => {
        html += `
            <div class='row' key=${ index }>
                <div class='col text-left p-0'>${ value.label }</div>
                <br /><br />
                <div class='col text-right p-0'>${ value.text }</div>
            </div>
        `
    })

    return html += '<br />'
}

export const showDetailDialog = (title, values) => {
    Swal.fire({
        title: title,
        width: 450,
        html: body(values),
        showCloseButton: true,
        showConfirmButton: false,
    })
}
