import { useDispatch } from 'react-redux'
import { setLogin } from '@/libs/store/slice/authSlice'
import { ChangeEvent, FC, FormEvent, useState } from 'react'
import {
  BaseFlexBox,
  BaseTextField,
  BaseButton,
  BaseCard,
  BaseHeading,
  BaseSpacing,
  BaseExternalLink,
} from '@/components/bases'
import httpClient from '@/libs/httpClient' // HTTPクライアントのインポート
import { onToastOpen } from '@/libs/store/slice/toastSlice' //トースト通知用のアクション?
import { store } from '@/libs/store' // storeをインポート
import { useNavigate } from 'react-router-dom'

const LoginPage: FC = () => {
  const navigate = useNavigate()
  // ログイン情報の状態を管理
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })

  // ログインボタンの作動を無効化する条件
  const idDisabled = loginInfo.email === '' || loginInfo.password === ''

  // 入力フィールドの変更ハンドル
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value

    // ログイン情報の状態を更新
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Reduxのdispatchを使用するためのフック
  const dispatch = useDispatch()

  // フォームの送信ハンドル
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    try {
      // ログインAPIを呼び出し
      const res = await httpClient.post('/auth/login', loginInfo)
      console.log(res)
      dispatch(setLogin(true)) // ログイン状態を更新

      //!トースト通知で成功メッセージを表示
      store.dispatch(
        onToastOpen({
          status: 'success',
          message: 'ログインに成功しました。',
        })
      )
      navigate('/')
    } catch (error) {
      console.error(error)
      alert('ログインに失敗しました。') // エラーメッセージを表示
    }
  }

  return (
    <>
      <BaseFlexBox flexDirection="column" alignItems="center">
        <BaseCard style={{ width: '480px', maxWidth: '100%' }}>
          <BaseHeading>ログイン</BaseHeading>
          <BaseSpacing top="5xl">
            <BaseFlexBox el="form" flexDirection="column" rowGap="3xl" onSubmit={handleSubmit}>
              <BaseTextField
                type="email"
                name="email"
                value={loginInfo.email}
                onChange={handleChange}
                placeholder="メールアドレス*"
                label="メールアドレス*"
                labelId="email-label"
              ></BaseTextField>
              <BaseTextField
                type="password"
                name="password"
                value={loginInfo.password}
                onChange={handleChange}
                placeholder="パスワード*"
                label="パスワード*"
                labelId="password-label"
              ></BaseTextField>
              <BaseButton disabled={idDisabled}>ログイン</BaseButton>
            </BaseFlexBox>
          </BaseSpacing>
          <BaseSpacing top="3xl">
            <BaseFlexBox flexDirection="column" alignItems="center" rowGap="lg">
              <BaseExternalLink>パスワードを忘れた方はこちら</BaseExternalLink>
              <BaseExternalLink>新規会員登録はこちら</BaseExternalLink>
            </BaseFlexBox>
          </BaseSpacing>
        </BaseCard>
      </BaseFlexBox>
    </>
  )
}

export default LoginPage
