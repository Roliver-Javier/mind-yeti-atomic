import React from "react";
import { Flex, GridBox } from '../../atoms'

import { Banner, ResourcesTeacher, GetStartedPlaylist, MessageCard } from '../../organisms'

const EarlyAccess = ({
    banner,
    resourcesTeacher,
    playlist,
    message
}) => {

  return (
    <Flex bg="skyBlue">
        <Banner {...banner} />
       <Flex width="98%" margin="0 auto" pb="5%" mt="-5rem" positon="relative" >
            <GridBox gridTemplateColumn="1fr" gridGap="20px">
                <ResourcesTeacher {...resourcesTeacher} />
                <GetStartedPlaylist {...playlist}/>
                <MessageCard {...message}/>
            </GridBox>
       </Flex>
    </Flex>
  );
};

export default EarlyAccess;
