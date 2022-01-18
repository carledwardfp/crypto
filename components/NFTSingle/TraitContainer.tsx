import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { INFTAssetData } from '../../lib/types'

interface TraitProps {
  trait: {
    trait_type: string
    value: string
    display_type: any
    max_value: any
    trait_count: number
    order: any
  }
}

const TraitContainer: React.FC<INFTAssetData> = (token) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="trait-container"
        id="trait-container"
      >
        <Typography variant="h6">Traits</Typography>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <Box>
          {token.traits.map((trait) => (
            <Box
              display="inline-block"
              m={1.5}
              p={1}
              maxWidth={150}
              width="100%"
              border="1px solid #2fc3cc"
              bgcolor="#2fc3cc0c"
              borderRadius={2}
              textAlign="center"
            >
              <Typography variant="body2">
                {trait.trait_type.toUpperCase()}
              </Typography>
              <Typography variant="h6" whiteSpace="nowrap">
                {trait.value}
              </Typography>
              <Typography variant="body2">
                {trait.trait_count} have this trait
              </Typography>
            </Box>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default TraitContainer
