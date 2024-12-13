import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import BusinessListDetailPage from "./pages/ActivityReport/BusinessListDetailPage";
import BusinessListPage from "./pages/ActivityReport/BusinessListPage";
import BusinessSearchResultPage from "./pages/ActivityReport/BusinessSearchResultPage";
import CoalitionDetailPage from "./pages/ActivityReport/CoalitionDetailPage";
import CoalitionPage from "./pages/ActivityReport/CoalitionPage";
import PolicyListPage from "./pages/ActivityReport/PolicyListPage";
import Home from "./pages/MainPage/Home";
import EventListDetailPage from "./pages/News/EventListDetailPage";
import EventListGuideDetailPage from "./pages/News/EventListGuideDetailPage";
import EventListPage from "./pages/News/EventListPage";
import NoticeListDetailPage from "./pages/News/NoticeListDetailPage";
import NoticeListPage from "./pages/News/NoticeListPage";
import MinutesListPage from "./pages/Document/MinutesListPage";
import MinutesListDetailPage from "./pages/Document/MinutesListDetailPage";
import RegulationsListPage from "./pages/Document/RegulationsListPage";
import RegulationsListDetailPage from "./pages/Document/RegulationsListDetailPage";
import Introduction from "./pages/Introduction/IntroductionPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Router = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/introduction/introduce"
              element={<Introduction menu="소개" />}
            />
            <Route
              path="/introduction/organization"
              element={<Introduction menu="조직도" />}
            />
            <Route
              path="/introduction/eachpart"
              element={<Introduction menu="국별 업무 소개" />}
            />
            <Route
              path="/introduction/centralcommitee"
              element={<Introduction menu="중앙운영위원회" />}
            />
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
            <Route
              path="/activityReport/coalition"
              element={<CoalitionPage />}
            />
            <Route
              path="/activityReport/coalitionDetail/:id"
              element={<CoalitionDetailPage />}
            />
            <Route path="/news/notice" element={<NoticeListPage />} />
            <Route path="/news/notice/:id" element={<NoticeListDetailPage />} />
            <Route path="/news/event" element={<EventListPage />} />
            <Route path="/news/event/:id" element={<EventListDetailPage />} />
            <Route
              path="/news/event/guide/:id"
              element={<EventListGuideDetailPage />}
            />
            <Route path="/document/minutes" element={<MinutesListPage />} />
            <Route
              path="/document/minutes/:id"
              element={<MinutesListDetailPage />}
            />
            <Route
              path="/document/regulations"
              element={<RegulationsListPage />}
            />
            <Route
              path="/document/regulations/:id"
              element={<RegulationsListDetailPage />}
            />
            {/* </Route> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Router;
