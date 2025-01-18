import { Tooltip, SeekButton } from '@vidstack/react';
import { SeekForward10Icon, SeekBackward10Icon } from '@vidstack/react/icons';

export const SeekForwardIcon = () => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <SeekButton className="vds-button" seconds={10}>
          <SeekForward10Icon className="vds-icon" />
        </SeekButton>
      </Tooltip.Trigger>
      <Tooltip.Content className="vds-tooltip-content" placement="top start">
        forward 10s
      </Tooltip.Content>
    </Tooltip.Root>
  );
};
export const SeekBackwardIcon = () => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <SeekButton className="vds-button" seconds={-10}>
          <SeekBackward10Icon className="vds-icon" />
        </SeekButton>
      </Tooltip.Trigger>
      <Tooltip.Content className="vds-tooltip-content" placement="top start">
        rewind 10s
      </Tooltip.Content>
    </Tooltip.Root>
  );
};
