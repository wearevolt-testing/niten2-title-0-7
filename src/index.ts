import app from './app'

// const port = process.env.PORT || 3000
const port =  3000

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on sdfds ${port}`)
})
