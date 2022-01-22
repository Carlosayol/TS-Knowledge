import { NextFunction, Request, Response } from 'express'
import { bodyValidator, controller, get, post } from './decorators'
import { use } from './decorators/use'

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Reuqest made')
  next()
}


@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
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
  }
  
  @post('/login')
  @bodyValidator('email', 'password')
  postLogin (req: Request, res: Response) {
    const { email, password } = req.body
    if (email === 'test@test.com' && password === 'test') {
      req.session = { loggedIn: true }
      res.redirect('/')
    } else {
      res.send('Invalid credentials')
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined
    res.redirect('/')
  }
}

