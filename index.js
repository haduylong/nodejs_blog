const express = require('express') // tạo biến (hàm trả về)
const app = express() // trả về đối tượng thao tác với web
const port = 3000

app.get('/', (req, res) => {
    var a = 1;
    var b = 2;

    var c = a + b;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})