export const GetMessages = elem => {
    const messages = []

    if(elem.validity.valueMissing){
        messages.push("value is required !")
    }

    if(elem.validity.typeMismatch){
        messages.push(`Invalid ${elem.type}`)
    }

    return messages
}