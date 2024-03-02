import { FC } from 'react'
import { BaseFlexBox, BaseInternalLink } from '@/components/bases'
import { FavoriteIcon } from '@/components/bases/BaseIcons'

const LoggedInGlobalNavigation: FC = () => {
	return (
		<nav>
			<BaseFlexBox el="ul" alignItems="center" justifyContent="space-between" columnGap="2xl">
				<li>
					<BaseInternalLink to="/favorites" color="black">
						<BaseFlexBox alignItems="center" columnGap="sm">
							<FavoriteIcon width={14} height={14} />
							気になる
						</BaseFlexBox>
					</BaseInternalLink>
				</li>
				<li>
					<BaseInternalLink to="/my-page" color="black">
						マイページ
					</BaseInternalLink>
				</li>
			</BaseFlexBox>
		</nav>
	)
}

export default LoggedInGlobalNavigation
