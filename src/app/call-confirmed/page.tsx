'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container, Section, Heading, Text } from '@/components/ui'
import { COLORS } from '@/lib/colors'

function MeetingConfirmedContent() {
  const searchParams = useSearchParams()

  // Extract and decode parameters
  const eventTypeName = decodeURIComponent(searchParams.get('event_type_name') || 'Meeting')
  const eventStartTime = decodeURIComponent(searchParams.get('event_start_time') || '')
  const assignedTo = decodeURIComponent(searchParams.get('assigned_to') || 'Our Team')
  const inviteeFullName = decodeURIComponent(searchParams.get('invitee_full_name') || '')
  const inviteeEmail = decodeURIComponent(searchParams.get('invitee_email') || '')

  // Format date and time
  const formatDateTime = (isoString: string) => {
    try {
      const date = new Date(isoString)
      const dateStr = date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
      const timeStr = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      })
      return { date: dateStr, time: timeStr }
    } catch {
      return { date: 'TBD', time: 'TBD' }
    }
  }

  const { date, time } = formatDateTime(eventStartTime)

  return (
    <Section background="primary" className="py-16">
      <Container className="flex items-center justify-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full bg-white rounded-2xl p-8 sm:p-12 shadow-2xl flex flex-col gap-12"
        >
          {/* Title with Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
            >
              <CheckCircle size={64} style={{ color: COLORS.primary }} />
            </motion.div>
            <Heading size="h2" className="!mb-0 !mt-0 text-center">
              Call Confirmed
            </Heading>
          </motion.div>

          {/* Meeting Details - Conversational */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="space-y-5 p-6 rounded-xl"
            style={{ backgroundColor: `${COLORS.primary}04` }}
          >

            {inviteeFullName && (
              <Text className="text-gray-700 leading-relaxed">
                Hey {inviteeFullName},
              </Text>
            )}
            <Text className="text-gray-700 leading-relaxed">
              Your <span className="font-semibold text-gray-900">{eventTypeName}</span> is scheduled for <span className="font-semibold text-gray-900">{date} at {time}</span>.
            </Text>

            <Text className="text-gray-700 leading-relaxed">
              You'll be connecting with <span className="font-semibold text-gray-900">{assignedTo}</span>.
            </Text>

            {inviteeEmail && (
              <Text className="text-gray-700 leading-relaxed">
                We've sent a confirmation to <span className="font-semibold text-gray-900">{inviteeEmail}</span>. Check your inbox for the calendar invite.
              </Text>
            )}

            <Text className="text-gray-700">
              Here to Serve
            </Text>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default function MeetingConfirmedPage() {
  return (
    <Suspense fallback={<div className="h-screen bg-white" />}>
      <MeetingConfirmedContent />
    </Suspense>
  )
}
