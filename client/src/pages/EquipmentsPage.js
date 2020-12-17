import React, { useEffect } from 'react'
import network from '../network';
import { EquipmentsPageContainer,EquipmentsPageInnerContainer} from '../styledComponents/equipmentspage';
function EquipmentsPage() {

    const getEquipments = async () => {
        const { data } = await network.get('/api/equipments')
        console.log(data);
    }
    const createEquipment = async () => {
        const { data } = await network.post('/api/equipments',newEquipment)
    }

    useEffect(()=>{
        getEquipments();
    },[]);
    return (
        <EquipmentsPageContainer>
            <EquipmentsPageInnerContainer>

            </EquipmentsPageInnerContainer>
        </EquipmentsPageContainer>
    )
}

export default EquipmentsPage
