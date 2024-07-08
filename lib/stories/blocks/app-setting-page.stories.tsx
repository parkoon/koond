import { Avatar } from '../../components/avatar'
import { Screen, ScreenContent } from '../../components/screen'
import SeparatedDescription from '../../components/separated-description'
import Separator from '../../components/separator'

const meta = {
  title: 'blocks/App Setting Page',
  tags: ['autodocs'],
}

export const AppSettingPage = () => {
  return (
    <Screen>
      <ScreenContent>
        <div className="flex space-x-4">
          <Avatar src="https://picsum.photos/200/300" fallback="Lo" size={40} shape="square" />
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">Lorem</h2>
            <SeparatedDescription items={['Lorem ipsum', 'dolor sit amet consectetur']} />
          </div>
        </div>

        <Separator />
      </ScreenContent>
    </Screen>
  )
}

export default meta

// Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem hic ratione at, voluptatem nesciunt nam molestiae accusantium in fugiat magni aut temporibus. Exercitationem deleniti vel mollitia cumque libero dicta explicabo.
