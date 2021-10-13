import React from 'react'

import { Router, Scene } from 'react-native-router-flux'

import { LoginPage } from '../src/pages/loginPage'
import { InitialPage } from '../src/pages/initialPage'
import { InspectionPage } from '../src/pages/inspectionPage'
import { ManutencaoPage } from '../src/pages/ManutencaoPage'
import { InspectionForm } from '../src/pages/inspectionPage/inspecionFormPage'


export const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key= "Login" hideNavBar component={ LoginPage } initial={true} />
            <Scene key= "InitialPage" hideNavBar component={ InitialPage } />
            <Scene key= "InspectionPage" hideNavBar component={ InspectionPage }  />
            <Scene key= "ManutencaoPage" hideNavBar component={ ManutencaoPage }  />
            <Scene key= "InspectionForm" hideNavBar component={ InspectionForm }  />
        </Scene>
    </Router>
)