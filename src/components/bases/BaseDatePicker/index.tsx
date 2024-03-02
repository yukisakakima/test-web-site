import { FC, ReactNode, useEffect, useState } from 'react'
import { CalendarIcon, ArrowLeftIcon, ArrowRightIcon } from '@/components/bases/BaseIcons'
import { ThemeColor } from '@/styles/theme'
import {
  StyledDatePickerOverlay,
  StyledDatePickerWrapper,
  StyledDatePickerIcon,
  StyledCalendar,
  StyledCalendarHeader,
  StyledCalendarIcon,
  StyledCalendarYearMonth,
  StyledCalendarWeek,
  StyledCalendarWeekItem,
  StyledCalendarDate,
  StyledCalendarDateItem,
} from './styled'

interface CalendarType {
  value: string
  isOpen: boolean
  onClose: () => void
  onDateClick: (date: string) => void
}

const Calendar: FC<CalendarType> = ({ value, isOpen, onDateClick, onClose }) => {
  const WEEK: { value: string; color: keyof ThemeColor }[] = [
    {
      value: '日',
      color: 'red',
    },
    {
      value: '月',
      color: 'black',
    },
    {
      value: '火',
      color: 'black',
    },
    {
      value: '水',
      color: 'black',
    },
    {
      value: '木',
      color: 'black',
    },
    {
      value: '金',
      color: 'black',
    },
    {
      value: '土',
      color: 'accent',
    },
  ]

  const [date, setDate] = useState<Date>(new Date())
  const [dateList, setDateList] = useState<{ value: Date; color: keyof ThemeColor }[]>([])

  const createCalendarList = (date: Date) => {
    const prevMonthEnd = new Date(date.getFullYear(), date.getMonth(), 0)
    const nextMonthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 1)

    // 先月末の日付から表示する日付を計算
    const firstEmptyCalendarList = [...Array(WEEK.length - (WEEK.length - date.getDay()))]
      .map((_, idx) => ({
        value: new Date(prevMonthEnd.getFullYear(), prevMonthEnd.getMonth() + 1, idx * -1),
        color: 'main' as keyof ThemeColor,
      }))
      .sort((a, b) => a.value.getDate() - b.value.getDate())

    // 来月末の日付から表示する日付を計算
    const lastCalendarListLength = WEEK.length - nextMonthEnd.getDay()
    const lastEmptyCalendarList = [
      ...Array(lastCalendarListLength === WEEK.length ? 0 : lastCalendarListLength),
    ].map((_, idx) => ({
      value: new Date(nextMonthEnd.getFullYear(), nextMonthEnd.getMonth(), idx + 1),
      color: 'main' as keyof ThemeColor,
    }))

    // 当月の日付を計算
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    const currentCalendarList = [...Array(lastDate.getDate())].map((_, idx) => {
      const _date = new Date(date.getFullYear(), date.getMonth(), idx + 1)
      return {
        value: _date,
        color: WEEK[_date.getDay()].color,
      }
    })

    return [...firstEmptyCalendarList, ...currentCalendarList, ...lastEmptyCalendarList]
  }

  const setCalendarDate = (_date?: Date) => {
    const initDate = new Date(
      _date?.getFullYear() ?? date.getFullYear(),
      _date?.getMonth() ?? date.getMonth(),
      1
    )
    setDateList(createCalendarList(initDate))
  }

  const handlePrevMonthClick = () => {
    const prevMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1)
    setDateList(createCalendarList(prevMonth))
    setDate(prevMonth)
  }

  const handleNextMonthClick = () => {
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1)
    setDateList(createCalendarList(nextMonth))
    setDate(nextMonth)
  }

  const changeFormat = (_date: Date) => {
    const targetDate = `${_date.getFullYear()}/${(_date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}/${_date.getDate().toString().padStart(2, '0')}`

    return targetDate
  }

  const handleDateClick = (_date: Date) => {
    const targetDate = changeFormat(_date)
    onDateClick(targetDate)
    onClose()
  }

  useEffect(() => {
    const split = value.split('/')
    const SPLIT_DATE_LENGTH = 3
    if (split.length >= SPLIT_DATE_LENGTH) {
      const _date = new Date(Number(split[0]), Number(split[1]) - 1, Number(split[2]))
      setDate(_date)
      setCalendarDate(_date)
    } else {
      const _date = new Date()
      setDate(_date)
      setCalendarDate(_date)
    }
  }, [value])

  return (
    <StyledCalendar isOpen={isOpen}>
      <StyledCalendarHeader>
        <StyledCalendarIcon aria-label="前月" type="button" onClick={handlePrevMonthClick}>
          <ArrowLeftIcon />
        </StyledCalendarIcon>
        <StyledCalendarYearMonth>
          {date.getFullYear()}年{date.getMonth() + 1}月
        </StyledCalendarYearMonth>
        <StyledCalendarIcon aria-label="次月" type="button" onClick={handleNextMonthClick}>
          <ArrowRightIcon />
        </StyledCalendarIcon>
      </StyledCalendarHeader>

      {/* 日付 */}
      <StyledCalendarWeek>
        {WEEK.map(({ value, color }) => (
          <StyledCalendarWeekItem key={value} color={color}>
            {value}
          </StyledCalendarWeekItem>
        ))}
      </StyledCalendarWeek>
      <StyledCalendarDate>
        {dateList.map((item, idx) => (
          <StyledCalendarDateItem
            key={idx}
            color={item.color}
            onClick={() => handleDateClick(item.value)}
          >
            {item.value.getDate()}
          </StyledCalendarDateItem>
        ))}
      </StyledCalendarDate>
    </StyledCalendar>
  )
}

interface DatePickerProps {
  children: ReactNode
  value: string
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onDateClick: (date: string) => void
}

const BaseDatePicker: FC<DatePickerProps> = ({
  children,
  value,
  isOpen,
  onOpen,
  onClose,
  onDateClick,
}) => {
  return (
    <>
      <StyledDatePickerOverlay isOpen={isOpen} onClick={onClose} />
      <StyledDatePickerWrapper>
        {children}
        <StyledDatePickerIcon onClick={onOpen}>
          <CalendarIcon />
        </StyledDatePickerIcon>

        <Calendar value={value} isOpen={isOpen} onDateClick={onDateClick} onClose={onClose} />
      </StyledDatePickerWrapper>
    </>
  )
}

export default BaseDatePicker
