function execute(inputElementId, outputElementId) {
  let inputElement  = $(`#${inputElementId}`),
      outputElement = $(`#${outputElementId}`);

  // Prepare the input code
  let inputCode = CoffeeScript.compile(
        inputElement.text()
          .replaceAll("console.log",   "logHtml")
          .replaceAll("console.error", "errorHtml")
      );

  // Prepare functions
  logHtml = (...args) => {
    let messageLog = $("<code></code>");
    messageLog.text(args.join(" "));
    messageLog.css("display", "block");
    outputElement.append(messageLog);
    console.log(args);
  }
  errorHtml = (...args) => {
    let messageLog = $("<code></code>");
    messageLog.text(args.join(" "));
    messageLog.css({
      "display"          : "block",
      "background-color" : "#FF000066",
      "color"            : "#F00",
      "padding"          : "5px",
      "margin"           : "3px",
      "border-radius"    : "3px"
    });
    outputElement.append(messageLog);
    console.error(args);
  }
  outputElement.css("display", "block");

  // Eval code
  new Promise((res, rej) => eval(inputCode))
    .then(res => {})
    .catch(err => errorHtml(err));
}