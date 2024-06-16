import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PageError from './globals/Componenets/PageError.tsx'
import { RecoilRoot } from 'recoil'
import App from './App.tsx'
import Sorry from './globals/Componenets/Sorry.tsx'
import CrimeBranchWebView from './web_clinet/pages/crime_branch/CrimeBranchWebView.tsx'
import { CrimeBranchMobileView } from './moblie_client/pages/CrimeBranchMobileView.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageError />,
  },
  {
    path: '/web_crime_branch',
    element: <CrimeBranchWebView />,
    errorElement: <PageError />,
  },
  {
    path: '/mobile_crime_branch',
    element: <CrimeBranchMobileView />,
    errorElement: <PageError />,
  },
  {
    path: '/web_public_data_portal',
    element: <Sorry />,
    errorElement: <PageError />
  },
  {
    path: '/web_crime_db_and_analsys',
    element: <Sorry />,
    errorElement: <PageError />
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
)
