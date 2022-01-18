export const nameAndFirstname = async (string) => {
    const newString = await string
    .split(" ")
    .map((e) => {
      return e[0].toUpperCase() + e.substr(1);
    })
    .join(" ");
    return newString
}