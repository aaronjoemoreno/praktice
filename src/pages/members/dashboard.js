import React, { useState } from 'react'
import styled from 'styled-components'
import MemberShipNav from '../../components/membership/membershipNav'
import Logo from '../../components/logo'
import CertificationAndInsurance from '../../components/membership/certificationAndInsurance'
import "normalize.css"
import '../../components/layout.css'

const Container = styled.div`
    width: 100%;
    text-align: center;
`

const Dashboard = () => {
    //Move to useContext
    const [verified, setVerified] = useState(false);
    const [status, setStatus] = useState(1);

    return (
        <Container>
            <MemberShipNav />
            <Logo />
            <h1>Welcome "BUSINESS NAME"</h1>

            {status === 1 &&
                <CertificationAndInsurance />
            }
        </Container>
    )
}

export default Dashboard