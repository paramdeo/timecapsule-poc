export const invalid = (secretDate: string, timeZone: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Time Capsule</title>
</head>
<style>
  body {
    color: #fdfdf5;
    background-color: #000814;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }
  .container {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }
  .container > div {
    padding: 10px;
  }
  span {
    color: #fca311;
  }
</style>
  <body>
    <div class="container">
      <div>
          Secret won't be revealed until <span>${secretDate}</span> in <span>'${timeZone}</span>' time zone...
      </div>
    </div>
  </body>
</html>
`

export const valid = (secretString: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Time Capsule</title>
</head>
<style>
  body {
    color: #fdfdf5;
    background-color: #000814;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }
  .container {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }
  .container > div {
    padding: 10px;
  }
  span, a {
    color: #fca311;
  }
</style>
  <body>
    <div class="container">
      <div>
          The secret is: <a href="${secretString}" rel="noopener">${secretString}</a>
      </div>
    </div>
  </body>
</html>
`
