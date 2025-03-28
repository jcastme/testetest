import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CustomTemplateList } from "./customTemplate/CustomTemplateList";
import { CustomTemplateCreate } from "./customTemplate/CustomTemplateCreate";
import { CustomTemplateEdit } from "./customTemplate/CustomTemplateEdit";
import { CustomTemplateShow } from "./customTemplate/CustomTemplateShow";
import { UsageAnalyticsList } from "./usageAnalytics/UsageAnalyticsList";
import { UsageAnalyticsCreate } from "./usageAnalytics/UsageAnalyticsCreate";
import { UsageAnalyticsEdit } from "./usageAnalytics/UsageAnalyticsEdit";
import { UsageAnalyticsShow } from "./usageAnalytics/UsageAnalyticsShow";
import { ProjectConfigurationList } from "./projectConfiguration/ProjectConfigurationList";
import { ProjectConfigurationCreate } from "./projectConfiguration/ProjectConfigurationCreate";
import { ProjectConfigurationEdit } from "./projectConfiguration/ProjectConfigurationEdit";
import { ProjectConfigurationShow } from "./projectConfiguration/ProjectConfigurationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"VSCodeCopilotExtension"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CustomTemplate"
          list={CustomTemplateList}
          edit={CustomTemplateEdit}
          create={CustomTemplateCreate}
          show={CustomTemplateShow}
        />
        <Resource
          name="UsageAnalytics"
          list={UsageAnalyticsList}
          edit={UsageAnalyticsEdit}
          create={UsageAnalyticsCreate}
          show={UsageAnalyticsShow}
        />
        <Resource
          name="ProjectConfiguration"
          list={ProjectConfigurationList}
          edit={ProjectConfigurationEdit}
          create={ProjectConfigurationCreate}
          show={ProjectConfigurationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
