import React from 'react';
import { Popover, PopoverHeader, PopoverBody, popoverOpen } from 'reactstrap';

const PopoverEffect = () => {
  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };
  return (
    <Popover
      placement='bottom'
      isOpen={popoverOpen}
      target='mypopover'
      toggle={togglePopover}
    >
      <PopoverHeader>Copied!</PopoverHeader>
      <PopoverBody>Go ahead and paste this into the Slack Channel</PopoverBody>
    </Popover>
  );
};

export default PopoverEffect;
