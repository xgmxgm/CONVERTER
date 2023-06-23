import { Button } from '@/shared/ui/Button'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const NotFoundPage: FC = () => {
    const { t } = useTranslation();

    return (
        <div className='flex flex-col items-center mt-[60px]'>
            <h2 className='text-3xl'>{t("Main.NotFoundPage.NotFound")}</h2>
            <Link className='mt-[10px]' to="/">
                <Button>
                    {t("Main.NotFoundPage.Home")}
                </Button>
            </Link>
        </div>
    )
}