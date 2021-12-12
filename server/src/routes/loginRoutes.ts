import { Request, Response, Router } from 'express'

interface RequestWithBody extends Request {
  body: { [x: string] : string | undefined }
}

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Home')
})

router.get('/login', (req: Request, res: Response) => {
  res.send(`
  <form method="POST">
    <div>
      <label>Email</label>
      <input name="email" />
    </div>
    <div>
      <label>Password</label>
      <input name="password" type="password" />
    </div>
    <button>Submit</button>
  </form>
  `)
})

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body

  if ( email && password && email === 'test@test.com' && password === 'test' ) {
    req.session = { loggedIn: true }
    res.redirect('/')
  } else {
    res.send('Invalid credentials')
  }
  
})

export { router }