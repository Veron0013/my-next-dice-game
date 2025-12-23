'use client';

import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { purple } from '@mui/material/colors';
import React from 'react';

export default function InputForm() {
  return (
    <div>
      <form>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            name="position"
            defaultValue="start"
          >
            <FormControlLabel
              value="under"
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
              label="Under"
              labelPlacement="start"
            />
            <FormControlLabel
              value="over"
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
              label="Over"
              labelPlacement="start"
            />
          </RadioGroup>
        </FormControl>
      </form>
    </div>
  );
}
