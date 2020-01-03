type Text = "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"

export const color = {
    header: {
        background: '#56CCF2',
        text: '#FFFFFF',
    },
    todoInput: {
        background: '#FFFFFF',
        formBackgound: '#F2F2F2',
        placeholder: '#8C8C8C',
        formBoder: '#BDBDBD',
    },
    todo: {
        text: '#565656',
        background: '#FFFFFF',
        border: '#F0F0F0',
        underlay: '#BDBDBD'
    },
    background: '#F9F9F9'
}

export const text = {
    header: {
        fontWeight: 'bold' as Text,
        fontSize: 18
    },
    menu: {
        fontWeight: 'normal' as Text,
        fontSize: 14
    },
    fontWeight: '600' as Text,
    fontSize: 14
}