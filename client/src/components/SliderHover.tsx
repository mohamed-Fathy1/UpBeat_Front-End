import { Slider } from "@mantine/core";
import { useHover } from "@mantine/hooks";

interface SliderHoverProps {
  barStyles?: React.CSSProperties;
  thumbStyles?: React.CSSProperties;
  trackStyles?: React.CSSProperties;
  trackRef: React.RefObject<any>;
  value: number;
  setCurrentTime?: (time: number) => void;
  size: number;
}

export function SliderHover({
  barStyles,
  thumbStyles,
  trackStyles,
  trackRef,
  value,
  setCurrentTime,
  size,
}: SliderHoverProps) {
  const { hovered, ref } = useHover();

  return (
    <Slider
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
      size={size}
      value={value}
      onChange={(value) => {
        const time = (trackRef.current.duration / 100) * value;
        if (trackRef.current) {
          trackRef.current.currentTime = time;
        }
        setCurrentTime && setCurrentTime(time);
      }}
    />
  );
}
