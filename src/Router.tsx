import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import BusinessListDetailPage from "./pages/ActivityReport/BusinessListDetailPage";
import BusinessListPage from "./pages/ActivityReport/BusinessListPage";
import BusinessSearchResultPage from "./pages/ActivityReport/BusinessSearchResultPage";
import CoalitionDetailPage from "./pages/ActivityReport/CoalitionDetailPage";
import CoalitionPage from "./pages/ActivityReport/CoalitionPage";
import PolicyListPage from "./pages/ActivityReport/PolicyListPage";
import Home from "./pages/MainPage/Home";
import NoticeListPage from "./pages/News/NoticeListPage";
import NoticeListDetailPage from "./pages/News/NoticeListDetailPage";
import EventListPage from "./pages/News/EventListPage";
import EventListDetailPage from "./pages/News/EventListDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* <Route element={<Layout />}> */}
          <Route path="/" element={<Home />} />
          <Route
            path="/activityReport/policyList"
            element={<PolicyListPage />}
          />
          <Route
            path="/activityReport/businessList"
            element={<BusinessListPage />}
          />
          <Route
            path="/activityReport/businessListDetail/:id"
            element={<BusinessListDetailPage />}
          />
          <Route
            path="/activityReport/businessSearchResult"
            element={<BusinessSearchResultPage />}
          />
          <Route path="/activityReport/coalition" element={<CoalitionPage />} />
          <Route
            path="/activityReport/coalitionDetail/:id"
            element={<CoalitionDetailPage />}
          />
          <Route path="/news/notice" element={<NoticeListPage />} />
          <Route path="/news/notice/:id" element={<NoticeListDetailPage />} />
          <Route path="/news/event" element={<EventListPage />} />
          <Route path="/news/event/:id" element={<EventListDetailPage />} />
          {/* </Route> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
