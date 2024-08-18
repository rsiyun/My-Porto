import { findIconDefinition} from '@fortawesome/fontawesome-svg-core'
import type { IconLookup, IconDefinition, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, fab, far)
interface RsiconProps {
    icon: string,
    classname?: string,
}
const Rsicon = ({icon, classname}:RsiconProps) =>{
    let data = icon.split(" ");
    if (!data) {
        data = ['fas', 'coffee'];
    }
    const prefix: IconPrefix = data[0] as IconPrefix
    const iconName: IconName = data[1] as IconName
    const coffeeLookup: IconLookup = { prefix: prefix, iconName: iconName }
    const IconDefinition: IconDefinition = findIconDefinition(coffeeLookup)
    return(
        <FontAwesomeIcon icon={IconDefinition} className={classname}></FontAwesomeIcon>
    )
}
export default Rsicon;