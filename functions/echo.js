exports.handlebar = async(event) => {
    const { text } = event.queryStringParameters

    return {
        statusCode: 200,
        body: `you said :${text}`
    }
}