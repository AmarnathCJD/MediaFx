// Copyright (c) 2024 RoseLoverX

package telegram

type ParticipantUpdate struct {
	Client         *Client
	OriginalUpdate *UpdateChannelParticipant
	Channel        *Channel
	User           *UserObj
	Actor          *UserObj
	Old            ChannelParticipant
	New            ChannelParticipant
	Invite         ExportedChatInvite
	Date           int32
}

func (pu *ParticipantUpdate) ChannelID() int64 {
	if pu.Channel != nil {
		return pu.Channel.ID
	}
	return 0
}

func (pu *ParticipantUpdate) UserID() int64 {
	if pu.User != nil {
		return pu.User.ID
	}
	return 0
}

func (pu *ParticipantUpdate) ActorID() int64 {
	if pu.Actor != nil {
		return pu.Actor.ID
	}
	return 0
}

func (pu *ParticipantUpdate) Added() bool {
	if pu.Old != nil && pu.New != nil {
		if _, ok := pu.Old.(*ChannelParticipantBanned); ok {
			if _, ok := pu.New.(*ChannelParticipantObj); ok {
				return true
			}
		}
		if _, ok := pu.Old.(*ChannelParticipantLeft); ok {
			if _, ok := pu.New.(*ChannelParticipantObj); ok {
				return true
			}
		}
	}
	return false
}

func (pu *ParticipantUpdate) Left() bool {
	return pu.New == nil
}

func (pu *ParticipantUpdate) Joined() bool {
	if pu.Old != nil && pu.New != nil {
		if _, ok := pu.Old.(*ChannelParticipantLeft); ok {
			if _, ok := pu.New.(*ChannelParticipantObj); ok {
				return true
			}
		}
		if _, ok := pu.Old.(*ChannelParticipantBanned); ok {
			if _, ok := pu.New.(*ChannelParticipantObj); ok {
				return true
			}
		}
	}
	return false
}

func (pu *ParticipantUpdate) Banned() bool {
	if pu.Old != nil && pu.New != nil {
		if _, ok := pu.Old.(*ChannelParticipantObj); ok {
			if _, ok := pu.New.(*ChannelParticipantBanned); ok {
				return true
			}
		}
	}
	return false
}

func (pu *ParticipantUpdate) Kicked() bool {
	if pu.Old != nil && pu.New != nil {
		if _, ok := pu.Old.(*ChannelParticipantObj); ok {
			if _, ok := pu.New.(*ChannelParticipantLeft); ok {
				return true
			}
		}
	}
	return false
}

func (pu *ParticipantUpdate) Promoted() bool {
	if pu.Old != nil && pu.New != nil {
		if _, ok := pu.Old.(*ChannelParticipantObj); ok {
			if _, ok := pu.New.(*ChannelParticipantAdmin); ok {
				return true
			}
		}
		if _, ok := pu.Old.(*ChannelParticipantBanned); ok {
			if _, ok := pu.New.(*ChannelParticipantAdmin); ok {
				return true
			}
		}
	}
	return false
}

func (pu *ParticipantUpdate) Demoted() bool {
	if pu.Old != nil && pu.New != nil {
		if _, ok := pu.Old.(*ChannelParticipantAdmin); ok {
			if _, ok := pu.New.(*ChannelParticipantObj); ok {
				return true
			}
			if _, ok := pu.New.(*ChannelParticipantBanned); ok {
				return true
			}
		}
	}
	return false
}

func (pu *ParticipantUpdate) Marshal() string {
	return pu.Client.JSON(pu.OriginalUpdate)
}

// Rest Functions to be implemented
