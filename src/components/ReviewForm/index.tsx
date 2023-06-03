import {ReviewFormProps} from "./ReviewForm.props"
import cn from 'classnames'
import styles from './ReviewForm.module.css'
import {Button, Input, Paragraph, Rating, TextArea} from "src/components"
import {MdClose} from "react-icons/md"
import {Controller, useForm} from "react-hook-form"
import {IReviewForm, IReviewSentResponse} from "src/components/ReviewForm/ReviewForm.interface"
import axios from "axios"
import {API} from "src/helpers/api"
import {useRef, useState} from "react"

const Reviews = ({productId, className, ...props}: ReviewFormProps) => {
  const {register, control, handleSubmit, formState: {errors}, reset} = useForm<IReviewForm>()
  const [isSuccessSent, setIsSuccessSent] = useState<boolean>(false)
  const [errorSent, setErrorSent] = useState<string>('')

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const {data} = await axios.post<IReviewSentResponse>(API.reviews.createDemo, {...formData})
      if (data.message){
        return setIsSuccessSent(true)
      }
      setErrorSent('Что-то пошло не так')
    }catch (e) {
      const error = e as Error
      setErrorSent(error.message)
    }finally {
      reset()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        {...props}
        className={cn(className, styles.reviewForm)}
      >
        <Input
          placeholder="Имя"
          error={errors.name}
          {...register('name', {required: {value: true, message: 'Заполните имя'}})}
        />
        <Input
          {...register('title', {required: {value: true, message: 'Заполните заголовок'}})}
          placeholder="Заголовок отзыва"
          error={errors.title}
          className={styles.title}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{required: {value: true, message: 'Поставьте отзыв'}}}
            render={({field}) => (
              <Rating
                rating={field.value}
                isEditable
                error={errors.rating}
                ref={field.ref}
                setRating={field.onChange}
              />
            )}
          />
        </div>
        <TextArea
          resize="vertical"
          {...register('description', {required: {value: true, message: 'Заполните описание'}})}
          placeholder="Текст отзыва"
          error={errors.description}
          className={styles.description}
        />
        <div className={styles.submit}>
          <Button appearance="primary" className={styles.submitButton}>Отправить</Button>
          <Paragraph size="small" className={styles.info}>* Перед публикацией отзыв пройдёт модерацию и
            проверку</Paragraph>
        </div>
      </div>
      {
        isSuccessSent &&  <div className={cn(styles.successMessage, styles.statusPanel)}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <Paragraph size="small" className={styles.successDesc}>Спасибо, Ваш отзыв будет опубликован после
            проверки</Paragraph>
          <MdClose className={styles.closeIcon} onClick={() => setIsSuccessSent(false)}/>
        </div>
      }
      {
        errorSent &&  <div className={cn(styles.errorMessage, styles.statusPanel)}>
          <div className={styles.errorTitle}>Ошибка!</div>
          <Paragraph size="small" className={styles.errorDesc}>Извините, произошла ошибка при отправке вашего отзыва</Paragraph>
          <MdClose className={styles.closeIconError} onClick={() => setErrorSent('')}/>
        </div>
      }
    </form>
  )
}

export default Reviews