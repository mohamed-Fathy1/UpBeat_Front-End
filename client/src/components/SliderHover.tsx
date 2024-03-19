import { Slider } from "@mantine/core";
import { useHover } from "@mantine/hooks";

interface SliderHoverProps {
  barStyles?: React.CSSProperties;
  thumbStyles?: React.CSSProperties;
  trackStyles?: React.CSSProperties;
}

export function SliderHover({
  barStyles,
  thumbStyles,
  trackStyles,
}: SliderHoverProps) {
  const { hovered, ref } = useHover();

  return (
    <Slider
      defaultValue={40}
      min={0}
      max={100}
      ref={ref}
      label={null}
      styles={{
        thumb: {
          transition: "opacity 150ms ease",
          opacity: hovered ? 1 : 0,
          ...thumbStyles,
        },
        bar: barStyles,
        root: trackStyles,
      }}
    />
  );
}
