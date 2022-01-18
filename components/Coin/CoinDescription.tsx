import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { ICoinData } from '../../lib/types'

const CoinDescription = (coin: ICoinData) => {
  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="coin-description"
        id="coin-description"
      >
        <Typography variant="h5">What is {coin.name}?</Typography>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <Typography dangerouslySetInnerHTML={{ __html: coin.description }} />
      </AccordionDetails>
    </Accordion>
  )
}

export default CoinDescription
