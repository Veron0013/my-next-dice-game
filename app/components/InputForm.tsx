'use client';

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
} from '@mui/material';
import { purple } from '@mui/material/colors';
import { useState } from 'react';
import { MARKS } from '../lib/vars';
import { PlayCondition, PlayData } from '../types/formTypes';

type Props = {
  onPlay: (data: PlayData) => void;
};

function valuetext(value: number) {
  return `${value}`;
}

export default function InputForm({ onPlay }: Props) {
  const [threshold, setThreshold] = useState<number>(20);
  const [condition, setCondition] = useState<PlayCondition>(
    PlayCondition.under
  );

  const handlePlayClick = () => {
    onPlay({ condition, threshold });
  };

  return (
    <div>
      <form className="flex flex-col items-center justify-center">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-form-control-label-placement"
            name="position"
            row
            sx={{ gap: 4 }}
            defaultValue={PlayCondition.under}
            onChange={e => setCondition(e.target.value as PlayCondition)}
          >
            <FormControlLabel
              value={PlayCondition.under}
              control={
                <Radio
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 28,
                    },
                    '&.Mui-checked': {
                      color: purple[500],
                    },
                  }}
                />
              }
              label={PlayCondition.under}
              labelPlacement="start"
            />
            <FormControlLabel
              value={PlayCondition.over}
              control={
                <Radio
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 28,
                    },
                    '&.Mui-checked': {
                      color: purple[500],
                    },
                  }}
                />
              }
              label={PlayCondition.over}
              labelPlacement="start"
            />
          </RadioGroup>
        </FormControl>
        <Box sx={{ width: 320 }}>
          <Slider
            onChange={(_, value) => setThreshold(value as number)}
            color="secondary"
            aria-label="Numbers"
            defaultValue={20}
            getAriaValueText={valuetext}
            shiftStep={5}
            step={1}
            min={0}
            max={100}
            marks={MARKS}
            valueLabelDisplay="auto"
          />
        </Box>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={handlePlayClick}
        >
          Play
        </Button>
      </form>
    </div>
  );
}
