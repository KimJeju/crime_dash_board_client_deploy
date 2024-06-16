import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PageError from './globals/Componenets/PageError.tsx'
import CrimeBranch from './web_clinet/pages/crime_branch/CrimeBranch.tsx'
import { RecoilRoot } from 'recoil'
import App from './App.tsx'
import Sorry from './globals/Componenets/Sorry.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageError />,
  },
  {
    path: '/branch',
    element: <CrimeBranch />,
    errorElement: <PageError />
  },
  {
    path: '/public_data_portal',
    element: <Sorry />,
    errorElement: <PageError />
  },
  {
    path: '/crime_analsys',
    element: <Sorry />,
    errorElement: <PageError />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
)
