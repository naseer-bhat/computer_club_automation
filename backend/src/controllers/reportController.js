import { ReportCard } from "../models/ReportCards.js";
import { Event } from "../models/Events.js";
import { Participant } from "../models/ParticipationRequests.js";

export const createReport = async (req, res) => {
  try {
    const { userId, eventId, score, remarks } = req.body;

    // Check if the event exists
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Optional: Check if participant exists
    const participant = await Participant.findOne({ userId, eventId });
    if (!participant) {
      return res
        .status(400)
        .json({ message: "User is not a participant in this event" });
    }

    // Create report card
    const newReport = await ReportCard.create({
      userId,
      eventId,
      score,
      remarks,
    });

    return res.status(201).json(newReport);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const getReports = async (req, res) => {
  try {
    const reports = await ReportCard.find();
    if (!reports) {
      return res.status(404).json({ message: "No reports found" });
    }
    return res.status(200).json(reports);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const getReportById = async (req, res) => {
  try {
    const { id } = req.params;
    const reportCard = await ReportCard.findById(id);
    if (!reportCard) {
      return res.status(404).json({ message: "Report card not found" });
    }
    return res.status(200).json(reportCard);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const updateReport = async (req, res) => {
  try {
    const { id } = req.params;
    const { score, remarks } = req.body;

    const updatedReportCard = await ReportCard.findByIdAndUpdate(
      id,
      { score, remarks },
      { new: true }
    );

    if (!updatedReportCard) {
      return res.status(404).json({ message: "Report card not found" });
    }

    return res.status(200).json(updatedReportCard);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const deleteReport = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReportCard = await ReportCard.findByIdAndDelete(id);
    if (!deletedReportCard) {
      return res.status(404).json({ message: "Report card not found" });
    }
    return res
      .status(200)
      .json({ message: "Report card deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const getReportByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const reportCards = await ReportCard.find({ userId });
    if (!reportCards) {
      return res.status(404).json({ message: "No report cards found" });
    }
    return res.status(200).json(reportCards);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const getReportByEventId = async (req, res) => {
  try {
    const { eventId } = req.params;
    const reportCards = await ReportCard.find({ eventId });
    if (!reportCards) {
      return res.status(404).json({ message: "No report cards found" });
    }
    return res.status(200).json(reportCards);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};