import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MobileTotalCrimeBranchSlide from './slides/MobileTotalCrimeBranchSlide';
import MobileMainCrimeBranchSlide from './slides/MobileMainCrimeBranchSlide';
import MobileSubCrimeBranchSlide from './slides/MobileSubCrimeBranchSlide';

export function CrimeBranchMobileTap() {
  return (
    <Tabs
      defaultActiveKey="total"
      className="mb-3"
      style={{ marginTop: "10px" }}
    >
      <Tab eventKey="total" title="총계" defaultChecked={true} style={{ width: "calc(100%)", height: "calc(100vh - 300px)" }}>
        <MobileTotalCrimeBranchSlide />
      </Tab>
      <Tab eventKey="main" title="대분류">
        <MobileMainCrimeBranchSlide />
      </Tab>
      <Tab eventKey="sub" title="소분류">
        <MobileSubCrimeBranchSlide />
      </Tab>
    </Tabs>
  );
}
