import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { INFTAssetData } from '../../lib/types'

interface CollectionDescriptionProps {
  trait: {
    trait_type: string
    value: string
    display_type: any
    max_value: any
    trait_count: number
    order: any
  }
}

const CollectionDescription: React.FC<INFTAssetData> = (token) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="collection-description"
        id="collection-description"
      >
        <Typography variant="h6">About {token.collection.name}</Typography>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <Typography>{token.collection.description}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default CollectionDescription
